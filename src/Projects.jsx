import './Projects.css'

export function Projects() {
    return(
        <>
        <div className="projectsSection">
            <p className='projectsName'> Projects </p>
            <div className="projectsCard">
                <div className='projectCard1'>
                    <h1> Driver Profiling System </h1>
                        <ul>
                            <li> Driving Analytics and User personalization with Improvement is the outocme of this project. </li>
                                <br/>
                            <li> Using open-souce API's the driving data is collected and peronalized analytics in shown after each drive. </li>
                                <br/>
                            <li> Using Machine Learning algorithms like Random Forests the User is classified into a class. </li>
                        </ul>
                    <div className='projectLinks'>
                        <a href="https://driver---profiling---system.firebaseapp.com/" target="_blank" rel="noreferrer">
                            <p className='liveDemo'> Live Demo </p>
                        </a>
                        <a href="https://www.youtube.com/watch?v=494Dyqd0Z0M" target="_blank" rel="noreferrer">
                            <p className='videoLink'> Video Link </p>
                        </a>
                        <a href="https://github.com/BRIAN-THOMAS-02/Driver-Profiling/" target="_blank" rel="noreferrer">
                            <p className='githubLink'> GitHub Link </p>
                        </a>
                    </div>
                </div>

                <div className='projectCard2'>
                    <h1> Virtual Assistant </h1>
                        <ul>
                            <li> Olivia is a voice-activated virtual assistant capable of automating various tasks, including setting reminders, searching the web, opening applications, typing in Word, and formatting text in Word. </li>
                                <br/>
                            <li> It also offers features like changing its voice, providing live news updates right from NDTV, and cracking jokes to enhance the user experience. </li>
                        </ul>
                    <div className='projectLinks'>
                        <a href="https://www.youtube.com/watch?v=Gl4RcwJjCmc" target="_blank" rel="noreferrer">
                            <p> Video Link </p>
                        </a>
                        <a href="https://github.com/BRIAN-THOMAS-02/VIRTUAL-ASSISTANT" target="_blank" rel="noreferrer">
                            <p> GitHub Link </p>
                        </a>
                    </div>
                </div>
                
                <div className='projectCard3'>
                    <h1> Gender Detection using CNN </h1>
                        <ul>
                            <li> Gender Detection program uses Convolutional Neural Networks for Binary Classification (Male/Female), with image pre-processing and data augmentation to improve model learning. </li>
                                <br/>
                            <li> The model architecture includes CNN layers with Batch Normalization, ReLU activation, hidden layers with ReLU activation and Dropout, trained using Adam Optimizer with binary_crossentropy loss, and accuracy and loss graphs saved during training. </li>
                        </ul>
                    <div className='projectLinks'>
                        <a href="https://www.youtube.com/watch?v=aJdhgoJiUu0" target="_blank" rel="noreferrer">
                            <p> Video Link </p>
                        </a>
                        <a href="https://github.com/BRIAN-THOMAS-02/Gender-Detection" target="_blank" rel="noreferrer">
                            <p> GitHub Link </p>
                        </a>
                    </div>
                </div>
                
                {/*
                <div className='projectCard4'>
                    <h1> Virtual Assistant </h1>
                    <p>
                        • Olivia is a voice-activated virtual assistant capable of automating various tasks, including setting reminders, searching the web, opening applications, typing in Word, and formatting text in Word.
                        <br/>
                        • It also offers features like changing its voice, providing live news updates right from NDTV, and cracking jokes to enhance the user experience.
                    </p>
                </div>
                */}

            </div>
        </div>
        </>
    )
}