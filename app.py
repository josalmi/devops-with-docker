from flask import Flask, jsonify, request

from dotenv import load_dotenv
import os
import pickle
import numpy as np
import tensorflow as tf
from PIL import Image
from scipy.misc import imresize
import imageio
from keras import backend
from flask_cors import CORS, cross_origin
from io import BytesIO

app = Flask(__name__)
CORS(app)

@app.route('/ping')
def ping():
  print('someone is pinging')
  return 'pong'

@app.route('/kurkkuvaimopo', methods=["POST"])
def test():
  data = request.files.get('img', '')
  data = imageio.imread(data)
  data = imresize(data, (128,128))
  with backend.get_session().graph.as_default() as g:
      res = model.predict(np.array(data).reshape(1, 128, 128, 3))
  return str(res[0][0])


if __name__ == '__main__':
  load_dotenv()
  debug = os.getenv('ENV') == 'development'
  global model 
  model = pickle.load(open('./model/kurkkumopotin.sav', 'rb'))

  app.run("0.0.0.0", port=5000, debug=debug)