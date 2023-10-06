Cấu trúc của 1 dự án React:React

1. node_modules
    - Thư mục chứa các module thư viện sử dụng trong dự án (react, react-dom, babel, bootstrap, react-bootstrap, ....)
    - Khi tải thư viện bất kỳ sử dụng cho dự án -> thư viện đó sẽ lưu tại thư mục này

2. public
    - Thư mục chứa các file công khai, bất kỳ người dùng nào có thể nhìn thấy (index.html, image file, css file, ...)

3. src
    - Thư mục chứa code behide của dự án. Nơi tạo ra các component để sử dụng
    - Người dùng không nhìn thấy các file này

4. .gitignore: file cấu hình cho git -> Sử dụng chỉ định những folders, files sẽ bỏ qua khi đồng bộ source code lên: GitHub, BitBucket, GitLab, SVN, ...

5. package.json: File chứa thông tin cấu hình cho dự án như:
    - Tên dự án
    - Phiên bản
    - Các thư viện đang sử dụng cho dự án
    - Script: Các lệnh thực thi bằng npm

6. README.md: File tài liệu cho dự án. Có thể viết hướng dẫn sử dụng cho người dùng tại đây.