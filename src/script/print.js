window.onload = function() {
    document.getElementById("print").addEventListener("click", () => {
        const invoice = this.document.getElementById("invoice");
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { before: "#nextpage1", after: "1cm" }
        };
        html2pdf().from(invoice).save();
    })
}