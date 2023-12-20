export default function NewCategory() {
    return (
        <div className='bg-gray-100 ml-2 w-full h-screen text-gray-900'>
            <div className="w-[80%] h-[90%] mx-auto mt-3 rounded-md">
                <h1 className="text-3xl flex items-center justify-center font-sansBold">
                    Cadastrar nova categoria
                </h1>

                <form className="forms w-1/2 h-[90%] mt-5 mx-auto flex rounded-md shadow-lg">
                    <div className="w-full h-20 flex flex-col gap-1 px-3 py-1">
                        <label htmlFor="description" className="text-lg">
                            Descrição:
                        </label>
                        <input type="text" name="description" className="w-4/5 h-10 pl-2 rounded-md bg-gray-900" />
                    </div>
                </form>
            </div>
        </div>
    );
};