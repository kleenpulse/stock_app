import { connectToDatabase } from "./mongoose";

async function testConnection() {
	try {
		await connectToDatabase();
		console.log("Database connection test successful!");
		process.exit(0);
	} catch (error) {
		console.error("Database connection test failed:", error);
		process.exit(1);
	}
}

testConnection();
