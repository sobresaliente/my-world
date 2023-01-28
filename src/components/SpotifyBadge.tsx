import { useState } from 'react';
import { Buffer } from 'buffer';

interface Props {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}
import querystring from 'querystring';

const SpotifyBadge: React.FC<Props> = ({ clientId, clientSecret, refreshToken }) => {
  const [currentTrack, setCurrentTrack] = useState({});
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }),
      mode: 'cors'
    });

    return response.json();
  };

  let currentPlayingTrack: any = '';

  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    currentPlayingTrack = fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    let response = await currentPlayingTrack;
    if (response.status === 204 || response.status >= 400) {
      setCurrentTrack({ isPlaying: false });
      return;
    }
    const data = await response.json();

    setCurrentTrack({
      song: data.item.name,
      href: data.item.uri,
      artists: data.item.artists.map((artist: any) => artist.name).join(', '),
      img: data.item.album.images[2].url
    });
  };

  getNowPlaying();

  return (
    <>
      {currentTrack.song ? (
        <section>
          <h3 className='text-left mt-8'>Currently listening to:</h3>
          <a href={currentTrack.href}>
            <div className='flex dark:bg-dark-bg-accent bg-bg-accent w-full sm:w-4/12 rounded-xl p-4 mt-4 text-left text-white'>
              <img
                src={currentTrack.img}
                className='rounded-full border-2 border-green-500'
                alt=''
              />
              <div className='ml-8'>
                <div>{currentTrack.song}</div>
                <div className='mt-2'>{currentTrack.artists}</div>
              </div>
            </div>
          </a>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default SpotifyBadge;
