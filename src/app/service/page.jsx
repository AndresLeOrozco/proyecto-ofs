/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Page that  gives ifnormation about other services that we offer.
*/
import Image from "next/image"
import tec from "../../../public/images/tec.png"
export const Home = () => {
    return (
        <div class="bg-white p-6 rounded-lg shadow-md flex">
            <div class="flex-shrink-0">
                <Image src={tec}
                    alt="Imagen pequeña"
                    width={200}
                    height={200} 
                    />
            </div>
            <div class="ml-4">
                <h1 class="text-2xl font-semibold">Our Services</h1><br />
                <p class="text-gray-700"> We are at the forefront of the revolution in the programming
                    world, offering a comprehensive platform for the fictional programming language called OFS. Our services
                    are designed to make programming more accessible and efficient than ever before.</p><br />

                <h6 class="text-2xl font-semibold">Advanced Compilation to Javascript</h6>
                <p class="text-gray-700">
                    Our platform features a powerful compiler that transpiles OFS code to Javascript quickly and accurately.
                    This means you can write and debug your code in OFS, and then run it on the web as fully functional Javascript
                    code. Transpiling to Javascript opens up a world of possibilities for your web development.</p><br />

                <h6 class="text-2xl font-semibold">Secure Code Storage</h6>
                <p class="text-gray-700">
                    We understand the importance of protecting your projects. We offer secure cloud storage for your
                    OFS code, ensuring that your creations are safeguarded and available anytime, anywhere. Youll never lose important
                    work again</p><br />

                <h6 class="text-2xl font-semibold">Intelligent Evaluation</h6>
                <p class="text-gray-700">
                    Our platform not only allows you to compile your code but also provides intelligent evaluation tools. It detects errors
                    in your OFS code before transpilation, saving you time and frustration in the development process.</p><br />

                <h6 class="text-2xl font-semibold">Real-Time Execution</h6>
                <p class="text-gray-700">
                    Our standout feature is real-time execution of your generated Javascript code. You can see your applications
                    come to life and test their functionality directly in our execution environment. Its the perfect way to ensure that everything
                    works as expected.</p><br />

                <h6 class="text-2xl font-semibold">Expert Technical Support</h6>
                <p class="text-gray-700">
                    Our team of technical support experts is always ready to assist you. From questions about the OFS language to technical issues, we
                    are here to provide the assistance you need on your development journey.</p><br />

                <p class="text-gray-700">
                    We are committed to simplifying the software development process and opening up new possibilities for programmers.
                    Join us on this exciting journey and discover all that you can achieve with OFS. Start programming smarter today!</p><br />
            </div>
        </div>
    )
}
export default Home