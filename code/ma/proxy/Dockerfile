FROM debian:bookworm-slim
# install modsecurity (libmodsecurity)
# install nginx with modsecurity-nginx module
# (needs openssl source to build)
RUN apt-get update \
	&& apt-get install -y git g++ apt-utils autoconf automake build-essential libcurl4-openssl-dev libgeoip-dev liblmdb-dev libpcre2-dev libtool libxml2-dev libyajl-dev pkgconf zlib1g-dev \
	&& git clone https://github.com/owasp-modsecurity/ModSecurity.git \
	&& cd ModSecurity/ \
	&& git submodule init \
	&& git submodule update \
	&& sh build.sh \
	&& ./configure --with-pcre2 \
	&& make \
	&& make install \
	&& cd / \
	&& rm -rf ModSecurity \
	&& git clone https://github.com/nginx/nginx.git \
	&& git clone https://github.com/owasp-modsecurity/ModSecurity-nginx.git \
	&& git clone https://github.com/openssl/openssl.git \
	&& cd nginx \
	&& cp ./auto/configure . \
	&& ./configure --add-module=/ModSecurity-nginx --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --with-openssl=/openssl --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-http_v3_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-g -O2 -ffile-prefix-map=/data/builder/debuild/nginx-1.25.4/debian/debuild-base/nginx-1.25.4=. -fstack-protector-strong -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -Wl,--as-needed -pie' \
	&& make \
	&& make install \
	&& cd / \ 
	&& rm -rf ModSecurity-nginx \
	&& rm -rf openssl \
	&& rm -rf nginx 

RUN groupadd --system --gid 1001 nginx \
    && useradd --system --gid nginx --no-create-home --home /nonexistent --comment "nginx user" --shell /bin/false --uid 1001 nginx \
    && mkdir -p /var/cache/nginx \
    && ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log 

#CRS4 config
COPY config/coreruleset-4.1.0 /etc/crs4
COPY config/crs-setup.conf /etc/crs4/
COPY config/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf /etc/crs4/rules/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf
COPY config/RESPONSE-999-EXCLUSION-RULES-AFTER-CRS.conf /etc/crs4/rules/RESPONSE-999-EXCLUSION-RULES-AFTER-CRS.conf

#nginx config
COPY config/nginx.conf /etc/nginx/
COPY config/config.conf /etc/nginx/conf.d/

#modsec config
COPY config/modsecurity.conf /etc/nginx/modsecurity.d/
COPY config/unicode.mapping /etc/nginx/modsecurity.d/
COPY config/modsec-includes.conf /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
