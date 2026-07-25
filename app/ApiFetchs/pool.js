import mysql from "mysql2/promise";
export const Pool  = mysql.createPool({
    host: "localhost",
    user: "sivasgur_root",
    password: "sivasgurun.com",
    database: "sivasgur_gurunilan",
	waitForConnections: true,
    connectionLimit: 10,  // Maksimum 10 eşzamanlı bağlantı
    queueLimit: 0
});