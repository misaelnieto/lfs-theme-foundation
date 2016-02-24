"""Responsive theme for LFS based on Zurb's Foundation
See:
https://github.com/misaelnieto/lfs-theme-foundation
"""
from setuptools import setup, find_packages
from os import path

here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'README.rst')) as f:
    long_description = f.read()
with open(path.join(here, 'CONTRIBUTORS.rst')) as f:
    long_description += f.read()
with open(path.join(here, 'CHANGES.rst')) as f:
    long_description += f.read()


setup(
    name = 'lfs-theme-foundation',
    version = '0.1',
    description = "Responsive theme for LFS based on Zurb's Foundation",
    long_description = long_description,
    url = 'https://github.com/misaelnieto/lfs-theme-foundation',
    author = 'Noe Nieto',
    author_email = 'nnieto@noenieto.com',
    packages = find_packages(),
    license = 'MIT',
    # See https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers = [
        'Development Status :: 4 - Beta',
        'Environment :: No Input/Output (Daemon)',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: Spanish',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
    ],
    keywords='foundation zurb theme css responsive ecommerce e-commerce development lfs django-lfs',
    include_package_data=True,
    install_requires = [],
    tests_require = ['nose>=1.0'],
)