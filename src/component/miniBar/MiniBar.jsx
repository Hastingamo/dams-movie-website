function MiniBar(props) {
  return (
    <>
      <div className="flex flex-col bg-white lg:w-[14rem] lg:h-[30rem] xl:w-[19.063rem] xl:h-[15.938rem]">
        <img 
            className="lg:w-5 lg:h-5 lg:ml-48 xl:w-5 xl:h-5 xl:ml-64"
            src={props.cancel} 
            alt="" />
        <h1 className="lg:ml-5 xl:ml-5 xl:text-3xl" >{props.title}</h1>
        <div className="flex flex-row gap-4 xl:mt-6">
          <img 
            className="lg:w-5 lg:h-5 lg:mt-3 xl:w-5 xl:h-5 ml-2 mt-2" 
            src={props.details}
            alt="" />
          <h1 className="text-[1.2rem] lg:mt-2">{props.detail}</h1>
        </div>
        <div className="flex flex-row">
          <img 
            className="xl:w-5 xl:h-5" 
            src=""
            alt="" />
          <h1>{props.like}</h1>
        </div>
        <div className="flex flex-row">
          <img 
            className="xl:w-5 xl:h-5" 
            src="" 
            alt="" />
          <h1>{props.dislike}</h1>
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
