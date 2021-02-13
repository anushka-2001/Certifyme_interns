import React, { Component } from 'react'
import Card from './CardUI';
import img1 from '../assests/aarju.png';
import img2 from '../assests/advaita.png';
import img3 from '../assests/akanksha.png';
import img4 from '../assests/akshat.png';
import img5 from '../assests/aman.png';
import img6 from '../assests/ananya.png';
import img7 from '../assests/anika.png';
import img8 from '../assests/anshnoor.png';
import img9 from '../assests/anushka.png';
import img10 from '../assests/claire.png';
import img11 from '../assests/griffin.png';
import img12 from '../assests/heena.png';
import img13 from '../assests/jahnavi.png';
import img14 from '../assests/mannat.png';
import img15 from '../assests/manshi.png';
import img16 from '../assests/nithya.png';
import img17 from '../assests/rachana.png';
import img18 from '../assests/saumya.png';
import img19 from '../assests/shivani.png';
import img20 from '../assests/vanshika.png';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content=center">
                <div className="row">
                    <div className="col-md-3"><Card imgsrc={img1} title="Aarju Kumari" text="Pursuing Master's at IMI, Bhubaneswar and Ex-intern at Max Life Insurance Company Limited." /></div>
                    <div className="col-md-3"><Card imgsrc={img2} title="Advaita Sinha" text="Pursuing Master's at DoMS, IIT Roorkee and contributing as Coordinator - Analytics Club." /></div>
                    <div className="col-md-3"><Card imgsrc={img3} title="Akanksha Sethi" text="Pursuing Masters's at Indian Institute of Management, Amritsar and Ex-Management Trainee at ShareKhan." /></div>
                    <div className="col-md-3"><Card imgsrc={img4} title="Akshat Uniyal" text="Pursuing Master's at Xavier Institute of Social Service, Incoming HR intern trainee at Volvo and Ex-Content Writer for TED Conferences." /></div>
                    <div className="col-md-3"><Card imgsrc={img5} title="Aman Anurag" text="Pursuing Master's at Ranchi University and pursued Bachelor's from St. Xavier's College, Ranchi." /></div>
                    <div className="col-md-3"><Card imgsrc={img6} title="Ananya Sarkar" text="Pursuing Bachelor's at Indian Institute of Information Technology and contributing as ML Dev and Outreach at Developer Student Club - IIIT Kalyani." /></div>
                    <div className="col-md-3"><Card imgsrc={img7} title="Anika Kapoor" text="Pursuing Bachelor's at Bennett University and contributing as Treasurer and Outreach Head, BU" /></div>
                    <div className="col-md-3"><Card imgsrc={img8} title="Anshnoor Kaur" text="Pursuing Bachelor's at The University of British Columbia." /></div>
                    <div className="col-md-3"><Card imgsrc={img9} title="Anushka Bhagchandani" text="Pursuing Bachelor's at Thadomal Shahani Engineering College and contributing as Core Team Member at Developer Student Club(Google)" /></div>
                    <div className="col-md-3"><Card imgsrc={img10} title="Claire Chen" text="Pursuing Bachelor's of Science, Statistics and Data Science at University of California." /></div>
                    <div className="col-md-3"><Card imgsrc={img11} title="Griffin Olson-Allen" text="Pursuing Bachelor's in Data Science at University of Michigan and Analyst at Banking at Michigan." /></div>
                    <div className="col-md-3"><Card imgsrc={img12} title="Heena Rijhwani" text="Pursuing Bachelor's at Thadomal Shahani Engineering College and Ex-Machine Learning Intern at National Engineering Olympiad." /></div>
                    <div className="col-md-3"><Card imgsrc={img13} title="Kathula Jahnavi" text="Pursuing Bachelor's at Malaviya National Institute of Technology." /></div>
                    <div className="col-md-3"><Card imgsrc={img14} title="Mannat Oberoi" text="Pursued Bachelor of Business Administration at Narsee Monjee Institute of Management Studies (NMIMS)" /></div>
                    <div className="col-md-3"><Card imgsrc={img15} title="Manshi Singhai" text="Pursuing Bachelor's of Technology at Mody Institute of Technology & Science" /></div>
                    <div className="col-md-3"><Card imgsrc={img16} title="Nithya Kruthi" text="Pursuing Bachelor's at Osmania University and Ex-Operations at ImpactGuru." /></div>
                    <div className="col-md-3"><Card imgsrc={img17} title="Rachana Bhaskar" text="Pursuing Master's in Computer Science from Illinois Institute of Technology and Ex-Software Engineer at Dell EMC." /></div>
                    <div className="col-md-3"><Card imgsrc={img18} title="Saumya Yaduvanshi" text="Pursuing Bachelor's of Commerce at Shri Ram College of Commerce and contributing as Content Writer at International Council Chapter SRCC" /></div>
                    <div className="col-md-3"><Card imgsrc={img19} title="Shivani Gupta" text="Pursuing Bachelor's of BBA at Indraprastha Institute of Management and Technology" /></div>
                    <div className="col-md-3"><Card imgsrc={img20} title="Vanshika Shaw" text="Pursuing Bachelor's at Narsee Monjee Institute of Management Studies and Ex-intern at HDB Financial Service." /></div>
                </div>
            </div>
        );
    }

}
export default Cards;