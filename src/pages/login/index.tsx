import { useState, ChangeEvent, FormEvent } from "react";
import './Login.css';
import { useLoginFormMutation } from "@/context/api/productApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface LoginForm {
    username: string;
    password: string;
}

const initialState: LoginForm = {
    username: "",
    password: ""
};

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginForm>(initialState);
    const [signUp, { isLoading, isSuccess, data, isError }] =useLoginFormMutation();

    if (isSuccess && data) {
        localStorage.setItem("x-auth-token", data.token);
        toast.success('Successfully logged in!');
        navigate('/admin');
    }
    
    if (isError) {
        toast.error('Xato kiritdingiz');
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signUp({
            username: formData.username, 
            password: formData.password
        });
        setFormData(initialState);
    };

    return (
        <div className="hammasi">
            <div className="hammasi_all">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
