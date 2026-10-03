@echo off
echo Starting Expense Tracker...
echo.

REM Start backend in new window
echo Starting backend on port 3000...
start "Backend Server" cmd /k "node server/server.js"

REM Wait a second for backend to start
timeout /t 2 /nobreak

REM Start frontend in new window
echo Starting frontend on port 5173...
start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo Both servers should be running now!
echo Backend: http://localhost:3000
echo Frontend: http://localhost:5173
pause
