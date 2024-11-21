document.addEventListener("DOMContentLoaded", function () {
    // Login validering
    const loginForm = document.getElementById("login-form");
    const alertContainer = document.getElementById("alert-container");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Simulert korrekt innlogging
            const correctEmail = "123@dininfo.no";
            const correctPassword = "passord123";

            alertContainer.innerHTML = "";

            if (email === correctEmail && password === correctPassword) {
                const successAlert = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Logg inn vellykket!</strong> Du blir nå sendt til dashboardet.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                alertContainer.innerHTML = successAlert;

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 2000);
            } else {
                const errorAlert = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Feil!</strong> Ugyldig e-post eller passord. Prøv igjen.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                alertContainer.innerHTML = errorAlert;
            }
        });
    }

    // QR code login
    const qrLoginButton = document.getElementById("qr-login-btn");
    const qrCodeContainer = document.getElementById("qr-code-container");

    if (qrLoginButton && qrCodeContainer) {
        qrLoginButton.addEventListener("click", function () {
            if (qrCodeContainer.style.display === "none" || !qrCodeContainer.style.display) {
                qrCodeContainer.style.display = "block";
            } else {
                qrCodeContainer.style.display = "none";
            }
        });
    }
});
