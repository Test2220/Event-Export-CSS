window.onload = function () {
  document.getElementById("print").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    const opt = {
      margin: [15, 25, 25, 25],
      filename: "Event-Book.pdf",
    };
    html2pdf().set(opt).from(invoice).save();
  });
};
