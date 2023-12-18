CREATE TABLE `blog_to_category_tb` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`blog_id` bigint NOT NULL,
	`category_id` bigint NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `blog_to_category_tb_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `blogs_tb` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`title` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`content` text NOT NULL,
	`published` boolean DEFAULT true,
	`views` int DEFAULT 0,
	`rating` decimal(2,1) DEFAULT '0.0',
	`author_id` bigint,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `blogs_tb_id` PRIMARY KEY(`id`),
	CONSTRAINT `blogs_tb_title_idx` UNIQUE(`title`),
	CONSTRAINT `blogs_tb_slug_idx` UNIQUE(`slug`),
	CONSTRAINT `blogs_tb_published_idx` UNIQUE(`published`)
);
--> statement-breakpoint
CREATE TABLE `categories_tb` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `categories_tb_id` PRIMARY KEY(`id`),
	CONSTRAINT `blogs_tb_name_idx` UNIQUE(`name`),
	CONSTRAINT `blogs_tb_slug_idx` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `roles_tb` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `roles_tb_id` PRIMARY KEY(`id`),
	CONSTRAINT `roles_tb_name_idx` UNIQUE(`name`),
	CONSTRAINT `roles_tb_slug_idx` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `users_tb` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`age` int,
	`gender` enum('male','female','other') NOT NULL,
	`role_id` bigint,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `users_tb_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_tb_name_idx` UNIQUE(`name`),
	CONSTRAINT `users_tb_email_idx` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `blog_to_category_tb` ADD CONSTRAINT `blog_to_category_tb_blog_id_blogs_tb_id_fk` FOREIGN KEY (`blog_id`) REFERENCES `blogs_tb`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `blog_to_category_tb` ADD CONSTRAINT `blog_to_category_tb_category_id_categories_tb_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories_tb`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `blogs_tb` ADD CONSTRAINT `blogs_tb_author_id_users_tb_id_fk` FOREIGN KEY (`author_id`) REFERENCES `users_tb`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `users_tb` ADD CONSTRAINT `users_tb_role_id_roles_tb_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles_tb`(`id`) ON DELETE cascade ON UPDATE cascade;