# NestJS-Index


`1. typeorm-extension 및 faker-js/faker 가상의 데이터 만들기
`
`2. database index 설정 전 후 속도 처리 결과 비교
`

typeorm-extension 및 faker-js/faker를 통해 100000개 이상의 가상 데이터 저장 및
typeorm Index 설정 후 성능 체크






## Index란?

데이터베이스 인덱스는 데이터베이스에서 특정 열 또는 컬럼에 대한 검색 및 조회 성능을 향상시키기 위해 데이터 구조이다.

인덱스는 데이터베이스 테이블의 열에 대한 정렬된 복사본으로 , 이 복사본은 검색 작업을 사용할 때 사용된다.

일반적으로 테이블의 primary key 나 unique을 보장하는 열에 생성된다.

인덱스를 사용하면 검색 기능이 향상되지만 Insert, update, delete의 성능은 다소 저하될 수 있음

### When use index

1. 검색 빈도: 자주 검색을 필요로 하는 열은 인덱스를 사용하여 검색 속도를 향상시킬 수 있다.
2. 조인 작업: 조인 조건으로 자주 사용되는 컬럼에 인덱스를 사용하면 효율을 늘릴 수 있다.
3. 정렬 및 그룹화 작업: Order By Or Group By와 같은 정렬 또는 그룹화 작업에 사용되는 열에 인덱스를 생성하여 속도 향상 가능
4. 고유성 보장: primary key 또는 unique 제약 조건을 가진 열에 인덱스를 생성할 경우 중복되는 데이터가 없어 인덱스 속도 향상
5. 범위 검색 : 범위 검색을 수행하는 쿼리에 사용되는 열에 대해서 인덱스를 사용하면 좋다.

