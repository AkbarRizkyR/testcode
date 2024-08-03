import { FaApple, FaFacebook } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignIn = () => {
        // Simulate sign in process
        navigate('/'); // Redirect to home page
    };

    return (
        <div className="flex h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 order-last md:order-first">
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className="md:w-1/2 p-4">
                        <h1 className="text-4xl font-bold">Sign In to Recharge Direct</h1>
                        <p className="mt-4 text-lg">
                            if you don&apos;t have an account you can <a href="/register" className="text-secondary">Register here!</a>
                        </p>
                    </div>
                    <div className=" p-4 flex justify-center">
                        <img src="/fallingguys.svg" alt="" className='' />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-100">
                <div className="w-full max-w-md">
                    <FormInput
                        type="email"
                        placeholder="Enter Email"
                        defaultValue='Akbar.rizky@test.com' // Ubah value menjadi defaultValue
                        className="w-full p-3 mt-4 border border-gray-300 rounded"
                    />
                    <FormInput
                        type="password"
                        placeholder="Password"
                        defaultValue='12345678' // Ubah value menjadi defaultValue
                        className="w-full p-3 mt-4 border border-gray-300 rounded"
                    />
                    <a href="#" className="block mt-2 text-right text-blue-500">Recover Password?</a>
                    <button
                        type="submit"
                        className="w-full p-3 mt-6 bg-blue-500 text-white rounded"
                        onClick={handleSignIn} // Add onClick handler
                    >
                        Sign In
                    </button>
                    <p className="mt-4 text-center">Or continue with</p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <button className="p-3 border border-gray-300 rounded">
                            <img src="/google.svg" alt="Google" className="h-6 w-6" />
                        </button>
                        <button className="p-3 border border-gray-300 rounded">
                            <FaApple className="text-black h-6 w-6" />
                        </button>
                        <button className="p-3 border border-gray-300 rounded">
                            <FaFacebook className="text-blue-700 h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;