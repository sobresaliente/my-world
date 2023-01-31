import { useEffect, useState } from 'react';
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

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <>
      {currentTrack.song ? (
        <section className='w-full'>
          <h3 className='text-left text-xl mt-8'>Currently listening to:</h3>
          <a href={currentTrack.href}>
            <div className='flex dark:bg-dark-bg-accent bg-bg-accent w-full  rounded-xl p-4 mt-4 text-left text-white h-24 sm:w-10/12'>
              <img
                src={currentTrack.img}
                className='rounded-full border-2 border-green-500 w-16 h-16'
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
        <section className='w-full'>
          <h3 className='text-left text-xl mt-8'>Current listening to:</h3>

          <div className='flex relative dark:bg-dark-bg-accent bg-bg-accent w-full rounded-xl mt-4 text-left text-white h-24 justify-center sm:w-10/12'>
            <div className='text-2xl  h-1/3 my-auto text-center'>Nothing</div>
          </div>
        </section>
      )}
    </>
  );
};
export default SpotifyBadge;
