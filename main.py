from flask import Flask, render_template
import gunicorn.app.base
import logging

class StandaloneApplication(gunicorn.app.base.BaseApplication):
    def __init__(self, app, options=None):
        self.options = options or {}
        self.application = app
        super().__init__()

    def load_config(self):
        config = {key: value for key, value in self.options.items()
                  if key in self.cfg.settings and value is not None}
        for key, value in config.items():
            self.cfg.set(key.lower(), value)

    def load(self):
        return self.application

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == '__main__':
    bind = "0.0.0.0:8080"
    workers = 4
    loglevel = "debug"
    accesslog = "-"
    errorlog = "-"
    proc_name = "poketable"

    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

    gunicorn_config = {
        'bind': bind,
        'workers': workers,
        'loglevel': loglevel,
        'accesslog': accesslog,
        'errorlog': errorlog,
        'proc_name': proc_name
    }

    StandaloneApplication(app, gunicorn_config).run()
