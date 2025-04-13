import SimpleComponent from './components/SimpleComponent';
import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';
import OverrideComponent from './components/OverrideComponent';
import PureComponent from './components/PureComponent';
import ProptypesComponent from './components/ProptypesComponent';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

export default function Home() {
  return (
    <div className="container">
      <h1>React Functional Components Examples</h1>
      
      <section>
        <h2>1. Simple Component</h2>
        <SimpleComponent />
      </section>

      <section>
        <h2>2. Component with Props</h2>
        <PropsComponent 
          name="John"
          age={25}
          isStudent={true}
        />
        <PropsComponent 
          name="Anna"
          age={22}
          isStudent={false}
        />
      </section>

      <section>
        <h2>3. Component with State</h2>
        <StateComponent />
      </section>

      <section>
      <h2>4.  Override Component</h2>
        <PureComponent/>
        
        <OverrideComponent />
      </section>


      <section>
      <h2>5. Component with Props and Types</h2>
        <ProptypesComponent />
        
      </section>

      <section>
      <h2>6. Class Component (Oldest but not goldest)</h2>
        <ClassComponent />
        
      </section>

      <section>
      <h2>7. Function Component</h2>
        <FunctionComponent />
        
      </section>
    </div>
  );
}
