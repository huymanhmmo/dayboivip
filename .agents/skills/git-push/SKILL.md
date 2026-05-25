---
name: git-push
description: Quy trình bắt buộc push code lên GitHub sau mỗi thay đổi trong dự án dayboivip. PHẢI thực hiện sau MỌI thay đổi file.
---

# Git Push Skill — dayboivip

## QUY TẮC BẮT BUỘC

> **Mỗi khi thay đổi bất cứ cái gì trong dự án dayboivip, BẮT BUỘC phải push thay đổi lên GitHub.**

## Thông tin Repository

- **Remote:** `https://github.com/huymanhmmo/dayboivip.git`
- **Branch:** `main`
- **Remote name:** `origin`

## Quy trình Push (đã có repo)

Khi repo đã được init và có remote, chỉ cần:

```bash
cd e:\CLAUDE\dayboivip
git add -A
git commit -m "<mô tả thay đổi>"
git push origin main
```

## Quy trình khởi tạo (lần đầu / repo mới)

Nếu repo chưa được init:

```bash
cd e:\CLAUDE\dayboivip
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/huymanhmmo/dayboivip.git
git push -u origin main
```

## Lưu ý quan trọng

1. **LUÔN push sau mỗi thay đổi** — không bao giờ để thay đổi chỉ ở local
2. **Commit message** phải mô tả rõ ràng thay đổi (tiếng Việt hoặc tiếng Anh đều được)
3. **Kiểm tra `git status`** trước khi push để đảm bảo không bỏ sót file
4. **Branch luôn là `main`**
