export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center border border-transparent font-semibold text-base text-white uppercase tracking-widest hover:bg-alerange2 focus:bg-alerange2 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
