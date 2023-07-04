USE tech_blog_db;

-- Insert users
INSERT INTO users (username, password) VALUES ('john_doe', 'password123');
INSERT INTO users (username, password) VALUES ('jane_smith', 'secret456');
INSERT INTO users (username, password) VALUES ('mark_jackson', 'myPassword789');
INSERT INTO users (username, password) VALUES ('sarah_adams', 'p@ssw0rd!');

-- Insert posts
INSERT INTO posts (title, content, userId) VALUES ('First Post', 'Hello, world!', 1);
INSERT INTO posts (title, content, userId) VALUES ('Second Post', 'This is my second post.', 1);
INSERT INTO posts (title, content, userId) VALUES ('Hello, Tech Blog', 'Welcome to the Tech Blog!', 2);
INSERT INTO posts (title, content, userId) VALUES ('Web Development Tips', 'Here are some tips for web development.', 3);
INSERT INTO posts (title, content, userId) VALUES ('Data Science Trends', 'Exploring the latest trends in data science.', 4);

-- Insert comments
INSERT INTO comments (content, userId, postId) VALUES ('Great post!', 2, 1);
INSERT INTO comments (content, userId, postId) VALUES ('I completely agree!', 3, 1);
INSERT INTO comments (content, userId, postId) VALUES ('Looking forward to more posts.', 4, 2);
INSERT INTO comments (content, userId, postId) VALUES ('This is very informative.', 1, 3);
INSERT INTO comments (content, userId, postId) VALUES ('Thanks for sharing!', 2, 3);
