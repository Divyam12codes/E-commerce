function Footer() {
    return(
        <>
        <div className='border bg-slate-500 flex flex-col justify-center text-white'>
        <h1 className='flex text-3xl justify-center m-3'>URBAN HOOD</h1>
        <div className='flex flex-row justify-between m-5'>
        <span className='underline cursor-pointer'>Terms & Conditions</span>
        <span className='underline cursor-pointer'>Privacy Policy</span>
        <span className='underline cursor-pointer'>Shipping Policy</span>
        <span className='underline cursor-pointer'>Refund Policy</span>
        </div>
        <div className='flex justify-center m-3'>Powered and secured by urbanhood.co</div>
      </div>
        </>
    );
}

export default Footer;