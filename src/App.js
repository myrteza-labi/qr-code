import 'tailwindcss/tailwind.css';

const App = () =>   
<div className="bg-[#D5E1EF] min-h-screen flex items-center justify-center">
<div className="rounded-[22px] bg-white p-4 pb-10">
  <div className="rounded-[10px] min-h-[288px] min-w-[288px] bg-[#2C7DFA] flex justify-center items-center">
  <img 
  className="max-w-[180px] max-h-[180px]"
  src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.linkedin.com/in/myrteza-labi/&size=160x160&bgcolor=2C7DFA&color=fff" 
  alt="QR-code du linkedin de Martin Myrteza Labi" 
  title="Martin Myrteza Linkedin"/>
  </div>
  <div className="max-w-[280px] text-center">
  <h1 className="font-semibold font-roboto text-[#1F314F] text-[22px] mt-6 mb-4">
    Scan pour explorer mon univers Linkedin ! 
    </h1>
  <p className="font-thin font-roboto text-[#7D889E] text-[15px]">
    Connectons-nous et créons ensemble une toile numérique impressionnante ! 🤝🌐  
  </p>
  </div>
</div>
</div>


export default App;
