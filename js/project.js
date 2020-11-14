var space = document.getElementById('content')
var edBtn = document.getElementById('edBtn')
var woBtn = document.getElementById('woBtn')
var prBtn = document.getElementById('prBtn')
var liBtn = document.getElementById('liBtn')

var selBtn = edBtn

edBtn.addEventListener('click',(e)=>{
    selBtn.classList.remove('select')
    edBtn.classList.add('select')
    selBtn = edBtn  
    edbtnCall(space)  
})

woBtn.addEventListener('click',(e)=>{
    selBtn.classList.remove('select')
    woBtn.classList.add('select')
    selBtn = woBtn
    wobtnCall(space)
})

prBtn.addEventListener('click',(e)=>{
    selBtn.classList.remove('select')
    prBtn.classList.add('select')
    selBtn = prBtn
    prbtnCall(space)
})

liBtn.addEventListener('click',(e)=>{
    selBtn.classList.remove('select')
    liBtn.classList.add('select')
    selBtn = liBtn
    libtnCall(space)
})

function prbtnCall(con){
    con.innerHTML = `Work in Progress`
}
function libtnCall(con){
    con.innerHTML = `<div id="title">Important Links</div>
    <div class="row">
        <a class="col-sm-12 col-md-12 col-lg-6" href="https://www.github.com/doped-semiconductor/">
        <div class="ecard">
            <div class="card-title"><img src="css/icons/git.png" alt=""></div>
            <div class="row card-sub-title"  style="display: flex; justify-content:center">Github</div>
            <div class="info2">https://github.com/doped-semiconductor/</div>
        </div>
        </a>
        <a class="col-sm-12 col-md-12 col-lg-6" href="https://www.linkedin.com/in/sreya-goswami/">
        <div class="ecard">
            <div class="card-title"><img src="css/icons/lin.png" alt=""></div>                
            <div class="row card-sub-title" style="display: flex; justify-content:center">LinkedIn</div>
            <div class="info2">https://www.linkedin.com/in/sreya-goswami/</div>            
        </div> 
        </a>
        <a class="col-sm-12 col-md-12 col-lg-6" href="mailto:getsreya@gmail.com">
        <div class="ecard">
            <div class="card-title"><img src="css/icons/mail.png" alt="mail"></div>                
            <div class="row card-sub-title" style="display: flex; justify-content:center">Email</div>
            <div class="info2">getsreya@gmail.com</div>            
        </div> 
        </a>
    </div>`
}
function wobtnCall(con){
    con.innerHTML = `<div id="title">Experience</div>
        
    <div class="row">

        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>Amazon</b></div>

            <div class="row card-sub-title">type of work</div>
            <div class="info">ACMS Mentorship</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">May 2020 - June 2020</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Chennai</div>
            
            <div class="row card-sub-title">description</div>
            <div class="info">
                Building a Knowledge Graph Based Bookmark Manager for Chrome
            </div>

        </div>
        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>PwC India</b></div>
            
            <div class="row card-sub-title">type of work</div>
            <div class="info">Internship</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">Jun 2019 - Jul 2019</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Kolkata</div>
            
            <div class="row card-sub-title">description</div>
            <div class="info">
                Worked on AWS - Lambda, EC2, Athena, Quicksight, Kinesis, Comprehend, SNS etc
            </div>

        </div>
        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>SustLabs</b></div>
            
            <div class="row card-sub-title">type of work</div>
            <div class="info">Internship</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">Dec 2018 - Jan 2019</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Mumbai</div>
            
            <div class="row card-sub-title">description</div>
            <div class="info">
                Worked on frontend for portal and server to post data from IoT device to MongoDB. 
            </div>

        </div>           

    </div>`
}
function edbtnCall(con){
    con.innerHTML = `<div id="title">Education</div>
        
    <div class="row">

        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>Graduation</b></div>

            <div class="row card-sub-title">institute</div>
            <div class="info">SRMIST</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">2017-2021</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Chennai</div>

            <div class="row card-sub-title">cgpa</div>
            <div class="info">8.2/10</div>

        </div>
        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>Class XII</b></div>
            
            <div class="row card-sub-title">institute</div>
            <div class="info">DPS Bangalore East (CBSE)</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">2016-2017</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Bangalore</div>

            <div class="row card-sub-title">marks</div>
            <div class="info">91%</div>

        </div>
        <div class="ecard col-sm-12 col-md-3 col-lg-3">
            <div class="card-title"><b>Class X</b></div>
            
            <div class="row card-sub-title">institute</div>
            <div class="info">DPS Bangalore East (CBSE)</div>         
            
            <div class="row card-sub-title">time</div>
            <div class="info">2014-2015</div>

            <div class="row card-sub-title">location</div>
            <div class="info">Bangalore</div>

            <div class="row card-sub-title">cgpa</div>
            <div class="info">9.8/10</div>

        </div>           

    </div>`
}

edbtnCall(space)