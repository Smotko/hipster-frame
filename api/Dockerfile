FROM python:3.6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

CMD py.test --cov=src && pylint src && python3 src/api.py --logging=debug
