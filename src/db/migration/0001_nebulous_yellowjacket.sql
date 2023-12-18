ALTER TABLE `blog_to_category_tb` MODIFY COLUMN `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `blogs_tb` MODIFY COLUMN `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `categories_tb` MODIFY COLUMN `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `roles_tb` MODIFY COLUMN `description` text;--> statement-breakpoint
ALTER TABLE `roles_tb` MODIFY COLUMN `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `users_tb` MODIFY COLUMN `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP;