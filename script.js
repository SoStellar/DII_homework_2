var singleStudentResult = document.getElementById('single_student_result')
var addUserDetail = document.getElementById('addUserDetail')
function addStudentData(student) {
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute("src", student.image)
}
function addStudentToDB(student){
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(student)
    }).then(response => {
        if(response.status === 200){
        return response.json()
    }else{
        throw Error(response.statusText)
    }
    }).then(data => {
        console.log('success',data)
        showStudentBlock(data)
    })
}
function onAddStudentClick(){
    let student = {}
    student.name = document.getElementById('nameInput').value
    student.surname = document.getElementById('surnameInput').value
    student.studentId = document.getElementById('studentIdInput').value
    student.gpa = document.getElementById('gpaInput').value
    student.image = document.getElementById('imageLinkInput').value
    addStudentToDB(student)
}
function showStudentBlock(student){
    singleStudentResult.style.display = 'block'
    addStudentData(student)
}
function onLoad(){
    addStudentToDB()
}