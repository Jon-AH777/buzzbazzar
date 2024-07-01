const DashboardLayout = ({children}) => {
  return (
    <div>
     
       <div className='flex bg-back text-white'>
      <div className='p-5 flex-1 bg-backSoft min-h-screen ;'>
        {/* <Sidebar /> */}
      </div>
      <div className='p-4 flex-[4]'>
        <h1>hello dashboard</h1>
       {/*  <Navbar /> */}
        {children}
       {/*  <Footer /> */}
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout