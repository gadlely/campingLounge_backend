# Java 17이 설치된 공식 이미지 사용
FROM eclipse-temurin:17-jdk

# 앱 파일 넣을 디렉토리 설정
WORKDIR /app

# 프로젝트 전체 복사
COPY . .

# 빌드된 JAR 파일 실행
CMD ["java", "-jar", "build/libs/camping_lounge-0.0.1-SNAPSHOT.jar"]