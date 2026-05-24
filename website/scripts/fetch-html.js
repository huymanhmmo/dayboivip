import http from 'http';

http.get('http://localhost:4322/ky-thuat-boi/ky-nang-dung-nuoc/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Find where tl-hero__stats starts
    const index = data.indexOf('class="tl-hero__stats"');
    if (index === -1) {
      console.log('Not found tl-hero__stats');
      return;
    }
    console.log('Found tl-hero__stats at position', index);
    // Print 1000 characters before and after to see surrounding tags
    const start = Math.max(0, index - 800);
    const end = Math.min(data.length, index + 800);
    console.log(data.substring(start, end));
  });
}).on('error', (err) => {
  console.error('Error fetching: ', err);
});
