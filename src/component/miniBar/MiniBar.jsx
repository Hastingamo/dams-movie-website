function MiniBar(props) {
  return (
    <>
      <div className="flex flex-col bg-white w-28 h-52 md:w-[10rem] md:h-[23rem] lg:w-[14rem] lg:h-[30rem] xl:w-[19.063rem] xl:h-[15.938rem]">
        <img 
            className="w-4 h-4 ml-20 md:ml-32 md:w-6 md:h-6 lg:w-5 lg:h-5 lg:ml-48 xl:w-5 xl:h-5 xl:ml-64"
            // eslint-disable-next-line react/prop-types
            src={props.cancel} 
            alt="" />
            
        <h1 className="text-[0.8rem] ml-2 md:text-2xl lg:ml-5 xl:ml-5 lg:text-[1.6rem] xl:text-3xl" >{props.title}</h1>
        <div className="flex flex-row gap-4 md:mt-4 xl:mt-2">
          <img 
            className="w-4 h-4 mt-4 md:w-6 md:h-6 lg:w-5 lg:h-5 lg:mt-5 xl:w-5 xl:h-5 ml-2 " 
            // eslint-disable-next-line react/prop-types
            src={props.details}
            alt="" />
          <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">{props.detail}</h1>
        </div>
        <div className="flex flex-row gap-3 mt-2 md:mt-3 md:gap-5">
          <img 
            className="w-4 h-4 ml-2 md:w-6 md:h-6 xl:w-5 xl:h-5 lg:mt-5" 
            src={props.likes}
            alt="" />
          <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">{props.like}</h1>
          </div>
        <div className="flex flex-row gap-3 mt-2 md:mt-3 md:gap-5">
          <img 
            className="w-4 h-4 ml-2 md:w-6 md:h-6 lg:mt-5 xl:w-5 xl:h-5" 
            src={props.dislikes}
            alt="" />
          <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">{props.dislike}</h1>
          </div>
        <div className="flex flex-row">
          <img
            className="xl:w-5 xl:h-5"  
            src="" 
            alt="" />
          <h1>{props.love}</h1>
        </div>
        <div>
          <img
            className="xl:w-5 xl:h-5"  
            src="" 
            alt="" />
          <h1></h1>
        </div>
      </div>
    </>
  );
}

export default MiniBar;
