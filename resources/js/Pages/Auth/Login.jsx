import { useEffect } from 'react';
import Logo from '/public/images/moonton-white.svg';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link,Head, useForm } from '@inertiajs/inertia-react';

export default function Login({ status }){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
        <Head title="Login"/>
        <div>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-8 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src={Logo} alt="Logo"/>
                <div className="my-[54px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Welcome Back
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                                <InputLabel
                                forInput="email"
                                value="Email Address" />
                                <TextInput 
                                type="email" 
                                name="email"
                                placeholder="Email Address"
                                value={data.email}
                                isFocused={true}
                                handleChange={onHandleChange} 
                                />
                                <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel
                                forInput="password"
                                value="Password" />
                                <TextInput 
                                type="password" 
                                name="password"
                                placeholder="Password" 
                                value={data.password} 
                                handleChange={onHandleChange} />
                                <InputError message={errors.password} className="mt-2" />
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <PrimaryButton
                        type='submit'
                        processing={processing}
                        className="w-full" 
                        children="Start Watching" />
                        <Link href={route('register')}>
                        <SecondaryButton
                        className="w-full"
                        children="Create New Account"
                        /></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
    );
}