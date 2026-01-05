import PersonalBio from "./components/ReactMiniDay1/PersonalBio";
import Greeting from "./components/ReactMiniDay1/Greeting";
import Counter from "./components/ReactMiniDay1/Counter";
import Hobbies from "./components/ReactMiniDay1/Hobbies";

function App() {
return (
<div>
    <PersonalBio
    name="Monisha"
    age={28}
    bio="Web Developer"
    />

    <Greeting name="Monisha"
    />

    <Counter />

    <Hobbies hobbies={["Reading", "Coding", "Music", "Trvelling"]}
    />

</div>
);
}

export default App;
