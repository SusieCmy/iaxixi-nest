# iaxixi-nest

基于 NestJS 框架的后端服务项目。

## 技术栈

- **框架**: NestJS 10.x
- **语言**: TypeScript 5.x
- **ORM**: TypeORM 0.3.27
- **数据库**: MySQL
- **包管理**: pnpm
- **测试**: Jest

## 功能特性

- 用户管理模块
- TypeORM 数据库集成
- 环境变量配置管理
- RESTful API 接口

## 环境要求

- Node.js >= 18.x
- pnpm >= 8.x
- MySQL >= 5.7

## 安装

```bash
# 安装依赖
pnpm install
```

## 配置

在项目根目录创建 `.env` 文件：

```env
# 应用配置
PORT=3000

# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=iaxixi
```

## 运行项目

```bash
# 开发模式（热重载）
pnpm run start:dev

# 普通开发模式
pnpm run start

# 调试模式
pnpm run start:debug

# 生产模式
pnpm run start:prod
```

## 构建

```bash
# 构建项目
pnpm run build
```

## 测试

```bash
# 单元测试
pnpm run test

# 监听模式测试
pnpm run test:watch

# 测试覆盖率
pnpm run test:cov

# e2e 测试
pnpm run test:e2e
```

## 代码规范

```bash
# 格式化代码
pnpm run format

# 代码检查
pnpm run lint
```

## 项目结构

```
src/
├── config/              # 配置文件
│   ├── app.config.ts    # 应用配置
│   └── database.config.ts # 数据库配置
├── user/                # 用户模块
│   ├── dto/             # 数据传输对象
│   ├── entities/        # 实体定义
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── user.module.ts
├── app.module.ts        # 应用主模块
└── main.ts              # 应用入口
```

## 数据库

### 用户表 (iaxixi_user)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int | 主键，自增 |
| Name | varchar | 用户名 |
| Github | varchar | GitHub 账号 |
| Email | varchar | 邮箱地址 |
| Juejin | varchar | 掘金账号 |

## API 文档

启动项目后访问：`http://localhost:3000`

### 用户相关接口

- `GET /user` - 获取用户列表
- `GET /user/:id` - 获取用户详情
- `POST /user` - 创建用户
- `PATCH /user/:id` - 更新用户
- `DELETE /user/:id` - 删除用户

## 开发说明

1. 所有数据库实体定义在对应模块的 `entities` 目录下
2. 使用 DTO 进行数据验证和转换
3. 遵循 NestJS 模块化设计原则
4. 数据库 `synchronize` 已关闭，需手动管理数据库迁移

## License

UNLICENSED
