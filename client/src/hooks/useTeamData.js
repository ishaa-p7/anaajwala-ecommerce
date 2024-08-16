import Harsh from '../assets/Harsh1.jpg'
import faraz from '../assets/team/faraz.jpg'
import manasvi from '../assets/team/manasvi.jpg'
import subhan from '../assets/team/subhan.jpg'
import isha from '../assets/team/isha.jpeg'
import suyog from '../assets/team/suyog.jpg'
import jayaMam from '../assets/team/jayaMam.jpg'
import lalitSir from '../assets/mentor-image/lalitSir.jpg'
import ashishSir from '../assets/mentor-image/ashishSir.jpg'
import PriyankRana from '../assets/mentor-image/priyankRana.jpg'
import Dhakad from '../assets/mentor-image/Dhakad.jpg'

const useTeamData = ()=>{

    const teamData =[
        {
            image : jayaMam,
            name : "Jaya Singh Chouhan",
            profile : "Co. Founder",
            description : "Jaya Singh Chauhan, our Co-Founder, has played a crucial role as a mentor in web development. Her technical expertise and innovative mindset have been instrumental in guiding our project and shaping its success.",
            github : "https://github.com/Faraz-Khan-79996",
            linkdin : "https://www.linkedin.com/in/faraz-khan-b2a42028a/"
        },
        {
            image : faraz,
            name : "Faraz Khan",
            profile : "Lead Web Developer",
            description : "Faraz Khan, our lead Web Developer, brings his expertise as an IT engineer to the forefront, driving our project with a fresh perspective and a commitment to cutting-edge digital solutions.",
            github : "https://github.com/Faraz-Khan-79996",
            linkdin : "https://www.linkedin.com/in/faraz-khan-b2a42028a/"
        },
        {
            image : isha,
            name : "Isha Patel",
            profile : "Web Developer",
            description : "Isha Patel, the  Web Developer of our project, is an IT engineer with a strong talent for content writing, ensuring both technical excellence and engaging content.",
            github : "https://github.com/ishaa-p7",
            linkdin : "https://www.linkedin.com/in/isha-patel-842a95254/"
        },
        {
            image : manasvi,
            name : "Manasvi Ajmera",
            profile : "Web Developer",
            description : "Manasvi Ajmera, our Web Developer and IT Engineer, excels in both technical development and design, blending her creative flair with expert coding to elevate our project to new heights.",
            github : "https://github.com/manasviajmera",
            linkdin : "https://www.linkedin.com/in/manasvi-ajmera-b2000525a/"
        },
        {
            image : subhan,
            name : "Subhan Ahmed",
            profile : "Lead Mechanical Engineer",
            description : "Subhan Ahmed, a talented Lead Mechanical Engineer, designed and built the Effi-Cycle(GS Racers) for our project, focusing on efficiency and sustainability.",
            github : "",
            linkdin : "https://www.linkedin.com/in/subhan-ahmed-6595b1254/"
        },
        {
            image : suyog,
            name : "Suyog jagdale",
            profile : "Mechanical engineer",
            description : "Suyog Jagdale, a talented mechanical engineer, played a key role in developing the Effi-Cycle(GSRacers) for our project, focusing on design optimization and efficiency.",
            github : "",
            linkdin : "https://www.linkedin.com/in/suyog-jagdale-b2b3082a8/"
        },
        
    ]

    return teamData
}

const useMentorData = ()=>{

    const mentorData = [
        {
            name : "Dr. Ashish Mahajan",
            role : "Asst. Prof SGSITS",
            image : ashishSir
        },
        {
            name : "Dr. KK Dhakad",
            role : "Asst. Prof SGSITS",
            image : Dhakad,
        },
        {
            name : "Dr. Lalit Purohit",
            role : "HOD (IT) SGSITS",
            image : lalitSir,
        },
        {
            name : "CA .Priyank Rana",
            role : "Charted Accountant",
            image : PriyankRana,
        },
    ]

    return mentorData
}

export {
    useTeamData,
    useMentorData,
}