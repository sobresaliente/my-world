import { useState } from "react";

const Newsletrer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }

    return  <>
        <form className="mt-8 flex flex-col justify-center sm:block" onSubmit={handleSubmit}>

            <label className="text-orange-500 text-xl text-center">Enjoy my suffering? Subscribe to my weekly newsletter!</label>
             <input type="email" id="email" className="block text-black dark:bg-zinc-600 rounded-xl mt-4 w-10/12 sm:w-4/12 mx-auto h-12 sm:mx-0" value={email} onChange={(event) => setEmail(event.target.value)} />

        
            <button type="submit"className="mt-4" >Submit</button>
        </form>
        </>
};
export default Newsletrer;