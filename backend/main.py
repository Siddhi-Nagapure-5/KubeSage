from fastapi import FastAPI

app = FastAPI(title="KubeSage API", description="AI-Powered Kubernetes Intelligence Assistant")

@app.get("/")
def read_root():
    return {"message": "Welcome to KubeSage API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
