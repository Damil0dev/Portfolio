function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-5 px-4">
            <div className="w-full md:w-5/6 h-4/5 md:h-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 overflow-auto md:overflow-hidden">
                <div className="w-full md:w-1/3">
                    <Form />
                </div>
                <div className="w-full md:w-1/3">
                    <ContactInfo />
                </div>
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

function ContactInfo() {
    return (
        <div className="w-full flex flex-col gap-5 py-5 px-3 border-4 rounded-md shadow-lg">
            <h3 className="text-3xl font-bold">Contact info</h3>
            <Info word="Name" definition="Damian Ysla" />
            <Info word="Location" definition="Entre Rios, Argentina" />
            <Info word="Phone Number" definition="+54 3456 467547" />
            <Info word="Email" definition="ysladamian@outlook.com" />
        </div>
    )
}

function Info({word, definition}) {
    return (
        <dl>
            <dt className="text-xl font-semibold">{word}</dt>
            <dd className="text-lg text-gray-500 italic">{definition}</dd>
        </dl>
    )
}
export default NotFound;