import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
    const res = http.get('http://localhost:3000/healthcheck');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

// export default function () {
//     const res = http.get('http://localhost:3000/users');
//     check(res, { 'status was 200': (r) => r.status == 200 });
//     sleep(1);
// }

// export default function () {
//     const res = http.get('http://localhost:3000/products');
//     check(res, { 'status was 200': (r) => r.status == 200 });
//     sleep(1);
// }