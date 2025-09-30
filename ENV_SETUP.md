# Environment Variables Setup

This project uses environment variables for configuration. Follow these steps to set up your environment:

## 1. Copy Environment File
```bash
cp .env.example .env
```

## 2. Update Environment Variables
Edit the `.env` file with your actual values:

### Required Variables:
- `DB_HOST`: Database host URL
- `DB_USER`: Database username  
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `JWT_SECRET`: Secret key for JWT tokens (change this in production!)

### Optional Variables (with defaults):
- `PORT`: Server port (default: 9005)
- `NODE_ENV`: Environment mode (development/production)
- `DB_CONNECTION_LIMIT`: Database connection limit (default: 10)
- `JWT_ACCESS_TOKEN_EXPIRES_IN`: Access token expiry (default: 2h)
- `JWT_REFRESH_TOKEN_EXPIRES_DAYS`: Refresh token expiry in days (default: 7)

## 3. Security Notes
- Never commit the `.env` file to version control
- Use strong, unique JWT secrets in production
- Keep database credentials secure
- The `.env.example` file shows the structure without sensitive data

## 4. Production Setup
For production, set environment variables through your hosting platform or use a secure secrets management system.
