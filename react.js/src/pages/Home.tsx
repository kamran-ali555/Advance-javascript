import Cardss from "../components/cardss";
import FAQSection from "../components/faqs";
import { studentdata } from "../data/cards";

const Home = () => {
  return (
    <div>
      {/* <Cardss
        name="kamran"
        class="2nd"
        ispass="pass"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas."
      /> */}
      <div className="grid grid-cols-3 mb-10">
      
      {
        studentdata.map((student)=>{
          return <Cardss name={student.name}
          className={student.className}
          ispass={student.ispass}
          description={student.description} />
        })
      }
      </div>
      <FAQSection />
    </div>
  );
};

export default Home;
