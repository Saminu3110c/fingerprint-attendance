
async function captureFingerprint(mode) {
    const publicKey = {
        challenge: new Uint8Array(32),
        rp: { name: "Fingerprint Attendance System" },
        user: {
            id: new Uint8Array(16),
            name: document.getElementById('student_email').value,
            displayName: document.getElementById('student_name').value
        },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }],
        authenticatorSelection: {
            authenticatorAttachment: "platform", // Use device fingerprint scanner
            userVerification: "required"
        },
    };

    try {
        const credential = await navigator.credentials.create({ publicKey });
        const fingerprintId = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));

        if (mode === 'register') {
            document.getElementById('fingerprint_id').value = fingerprintId;
            document.getElementById('registerForm').submit();
        } else if (mode === 'attendance') {
            document.getElementById('attendance_fingerprint_id"]').value = fingerprintId;
            document.getElementById('attendanceForm').submit();
        }
    } catch (error) {
        console.error("Fingerprint capture failed: ", error);
    }
}

// assets/webauthn.js - Handles fingerprint capture and submission

// async function registerFingerprint() {
//     try {
//         const publicKey = {
//             challenge: new Uint8Array(32),
//             rp: { name: "Attendance System" },
//             user: {
//                 id: new Uint8Array(16),
//                 name: document.querySelector('input[name="email"]').value,
//                 displayName: document.querySelector('input[name="name"]').value
//             },
//             pubKeyCredParams: [{ type: "public-key", alg: -7 }]
//         };
//         const credential = await navigator.credentials.create({ publicKey });

//         document.getElementById('credential_id').value = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));
//         document.getElementById('public_key').value = btoa(String.fromCharCode(...new Uint8Array(credential.response.attestationObject)));
//         document.getElementById('registerForm').submit();
//     } catch (error) {
//         alert("Fingerprint registration failed: " + error);
//     }
// }



// async function captureFingerprint(mode) {
//     if (!window.PublicKeyCredential) {
//         alert("WebAuthn is not supported in your browser. Please try a modern browser.");
//         return;
//     }

        

//     const publicKey = {
//         challenge: new Uint8Array(32), // Random challenge for security
//         rp: { name: "Fingerprint Attendance System" },
//         user: {
//             id: new Uint8Array(16), // Random user ID (for uniqueness)
//             name: document.querySelector('input[name="email"]').value,
//             displayName: document.querySelector('input[name="name"]').value
//         },
//         pubKeyCredParams: [{ type: "public-key", alg: -7 }], // ECDSA with SHA-256
//         authenticatorSelection: {
//             authenticatorAttachment: "platform", // Use device fingerprint scanner
//             userVerification: "required"
//         },
//         timeout: 60000 // 60 seconds timeout
//     };

//     try {
//         // const credential = await navigator.credentials.create({ publicKey });
//         // const fingerprintId = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));

//         if (mode === 'register') {
//             const credential = await navigator.credentials.create({ publicKey });
//             document.getElementById('fingerprint_id').value = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));
//             // document.getElementById('public_key').value = btoa(String.fromCharCode(...new Uint8Array(credential.response.attestationObject)));
//             document.getElementById('registerForm').submit();
//             // document.querySelector('input[name="fingerprint_id"]').value = fingerprintId;
//             // document.querySelector('form[action="register.php"]').submit();
//         } else if (mode === 'attendance') {
//             const publicKey = { challenge: new Uint8Array(32) };
//             const credential = await navigator.credentials.get({ publicKey });

//             document.getElementById('fingerprint_id').value = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));
//             document.getElementById('attendanceForm').submit();

//             // document.querySelector('input[name="fingerprint_id"]').value = fingerprintId;
//             // document.querySelector('form[action="mark_attendance.php"]').submit();
//         }
//     } catch (error) {
//         console.error("Fingerprint capture failed: ", error);
//         alert("Fingerprint capture failed. Ensure the device supports WebAuthn.");
//     }
// }
