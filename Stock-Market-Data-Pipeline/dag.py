from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# Configura el servicio de ChromeDriver usando webdriver_manager
service = Service(ChromeDriverManager().install())

# Configura las opciones de Chrome para ejecutarse en modo headless
options = webdriver.ChromeOptions()
options.add_argument("--headless")

# Inicializa el navegador Chrome con el servicio y las opciones configuradas
driver = webdriver.Chrome(service=service, options=options)

try:
    # Abre la URL
    url = "https://www.youtube.com/watch?v=NZuNy3TzTSU&t=118s"
    driver.get(url)

    # Espera unos segundos para asegurarse de que la página se cargue completamente
    time.sleep(5)

    # Usa XPath para encontrar el elemento
    element = driver.find_element(By.XPATH, '//*[@id="info"]/span[1]')
    print(element.text)
    
finally:
    # Cierra el navegador
    driver.quit()
