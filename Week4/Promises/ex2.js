function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename,
          size: Math.floor(Math.random() * 1000) + 100,
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

async function processAllFiles() {
  const start = Date.now();
  const promises = files.map(f => processFile(f.name, f.time));

  try {
    const results = await Promise.all(promises);
    const totalTime = (Date.now() - start) / 1000;
    console.log("✅ All files processed successfully:");
    console.table(results);
    console.log(`⏱ Total processing time: ${totalTime} seconds`);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

// Bonus with allSettled:
async function processAllFilesWithAllSettled() {
  const start = Date.now();
  const promises = files.map(f => processFile(f.name, f.time));
  const results = await Promise.allSettled(promises);
  const totalTime = (Date.now() - start) / 1000;

  console.log("Results:");
  console.table(results);
  console.log(`⏱ Total processing time: ${totalTime} seconds`);
}
