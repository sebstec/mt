FROM nginx:1.25.4-bookworm
COPY config/ /etc/nginx/conf.d/
RUN apt-get update \
	&& apt-get install -y git g++ apt-utils autoconf automake build-essential libcurl4-openssl-dev libgeoip-dev liblmdb-dev libpcre2-dev libtool libxml2-dev libyajl-dev pkgconf zlib1g-dev \
	&& git clone https://github.com/owasp-modsecurity/ModSecurity.git \
	&& cd ModSecurity/ \
	&& git submodule init \
	&& git submodule update \
	&& sh build.sh \
	&& ./configure --with-pcre2 \
	&& make \
	&& make install
