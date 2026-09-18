
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_status():
    response = client.get("/status")
    assert response.status_code == 200
    data = response.json()
    assert data.get('project') is not None
    assert data.get('status') == 'ok'
