document.getElementById('download').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
     doc.rect(4, 4, 200, 300);
     doc.setLineWidth(180);
     doc.setFont('Courier', 'bold');
     doc.setFontSize(16);
     const lineHeight = 1.8;
     doc.setLineHeightFactor(lineHeight);
    const maxWidth = 180;
    const pdfContent = document.getElementById('resume-preview');
    doc.text(pdfContent.innerText, 10, 20, {maxWidth:maxWidth, align:"left"});
    doc.save('resume.pdf');
});

function generateResume() {
    document.getElementById("resume-name").innerText = document.getElementById("name").value;
    document.getElementById("resume-fathername").innerText = document.getElementById("fathername").value;
    document.getElementById("resume-mothername").innerText = document.getElementById("mothername").value;
    document.getElementById("resume-dob").innerText = document.getElementById("dob").value;
    document.getElementById("resume-sex").innerText = document.getElementById("sex").value;
    document.getElementById("resume-maritalstatus").innerText = document.getElementById("maritalstatus").value;
    document.getElementById("resume-nationality").innerText = document.getElementById("nationality").value;
    document.getElementById("resume-email").innerText = document.getElementById("email").value;
    document.getElementById("resume-phone").innerText = document.getElementById("phone").value;
    document.getElementById("resume-address").innerText = document.getElementById("address").value;
    document.getElementById("resume-objective").innerText = document.getElementById("objective").value;
    document.getElementById("resume-education").innerText = document.getElementById("education").value;
    document.getElementById("resume-languageknown").innerText = document.getElementById("languageknown").value;
    document.getElementById("resume-skills").innerText = document.getElementById("skills").value;
    document.getElementById("resume-experience").innerText = document.getElementById("experience").value;
    document.getElementById("resume-hobbiesinterests").innerText = document.getElementById("hobbiesinterests").value;
}

