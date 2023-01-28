import { useState } from "react";

interface Props {
    formId: string;
    apiKey: string;
}

const Newsletrer: React.FC<Props> = ({formId, apiKey}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = JSON.stringify({ email, api_key: apiKey});
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8',
          });


        try {
        await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers,
            body,
        });
        setEmail('');
        } catch(e) {
            console.log(e.message);
        }
    }

    return  <>
        <form className="mt-8 flex flex-col justify-center sm:block" onSubmit={handleSubmit}>

            <label className="text-accent dark:text-dark-accent text-xl text-center">Enjoy my suffering? Subscribe to my weekly newsletter!</label>
             <input type="email" id="email" className="block text-black dark:bg-dark-bg-secondary bg-bg-secondary rounded-xl mt-4 w-10/12 sm:w-4/12 mx-auto h-12 sm:mx-0" value={email} onChange={(event) => setEmail(event.target.value)} />


            <button type="submit" className="mt-4 dark:bg-dark-bg-accent bg-bg-accent rounded-lg p-2">Submit</button>
        </form>
        </>
};
export default Newsletrer;