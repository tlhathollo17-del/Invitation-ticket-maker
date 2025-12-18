function generateTicket() {
    document.getElementById("tEvent").innerText =
        document.getElementById("eventName").value;

    document.getElementById("tDate").innerText =
        document.getElementById("date").value;

    document.getElementById("tTime").innerText =
        document.getElementById("time").value;

    document.getElementById("tVenue").innerText =
        document.getElementById("venue").value;

    document.getElementById("tHost").innerText =
        document.getElementById("host").value;
}

function downloadPDF() {
    const ticket = document.getElementById("ticket");
    html2pdf().from(ticket).save("Invitation_Ticket.pdf");
}
document.getElementById("imageInput").addEventListener("change", function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        document.getElementById("ticketImage").src = reader.result;
        document.getElementById("ticketImage").style.display = "block";
    };

    if (file) reader.readAsDataURL(file);
});
