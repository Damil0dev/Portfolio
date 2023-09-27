function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center items-center gap-5 px-4">
            <div className="w-3/4">
                <Form />
            </div>
        </div>
    );
}

function Form() {
    return (
        <form action="" className="w-full flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Message me</h2>
            <div className="flex gap-3">
                <input type="text" name="name" id="name" placeholder="Name" required className="w-1/2 py-2 px-4 rounded-lg text-white" />
                <input type="email" name="email" id="email" placeholder="Email" required className="w-1/2 py-2 px-4 rounded-lg text-white" />
            </div>
            <input type="text" name="" id="" placeholder="Subject" required className="py-2 px-4 rounded-lg text-white" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="py-2 px-4 rounded-lg text-white"></textarea>
            <button type="submit" className="py-2 font-semibold text-white bg-blue-800">Send</button>
        </form>
    )
}
export default NotFound;